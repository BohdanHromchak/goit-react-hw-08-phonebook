import css from "./ContactList.module.css";
import {
  selectIsLoading,
  selectError,
  selectFilterQuery
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContacts } from "../../redux/contacts/contactsOperations";

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilterQuery);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            {name}: {number}
            <button
              onClick={() => dispatch(deleteContacts(id))}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
