import { ContactItemList } from '../ContactItemList/ContactItemList';
import { List, ListItem } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(contact => (
                <ListItem key={contact.id}>
                    <ContactItemList
                        contactName={contact.name}
                        contactNumber={contact.number}></ContactItemList>
                    <button
                        type="button"
                        id={contact.name}
                        className='btn btn-submit'
                        onClick={onDelete}>
                        Delete
                    </button>
                </ListItem>
            ))}
        </List>
    );
};