export const ContactItemList = ({ contactName, contactNumber }) => {
  return (
    <p>
      <span>{contactName}: </span>
      <span>{contactNumber}</span>
    </p>
  );
};