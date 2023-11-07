import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <div className={styles.contactListWrapper}>
      <table className={styles.contactTable}>
        <thead className={styles.contactTableHead}>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className={styles.contactTableBody}>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name} :</td>
              <td>{contact.number}</td>
              <td>
                <button
                  className={styles.contactDelBtn}
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;

// import React from 'react';
// import styles from './ContactList.module.css';

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <div className={styles.contactListWrapper}>
//     <ul className={styles.contactList}>
//       {contacts.map(contact => (
//         <li className={styles.contactItem} key={contact.id}>
//           {contact.name}: {contact.number}
//           <button
//             className={styles.contactBtn}
//             onClick={() => onDeleteContact(contact.id)}
//           >
//             Видалити контакт
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default ContactList;
