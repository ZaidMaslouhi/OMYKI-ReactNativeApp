import * as Contacts from "expo-contacts";
import { User } from "../interfaces/User";

const convertTimeToString = ({ time }: { time: Date }) => {
  let hours = time.getHours();
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  const minutes = time.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;
};

const importContact = async (): Promise<User | undefined> => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails],
    });

    if (data.length > 0) {
      const contact = data[0];
      return {
        id: contact.id,
        firstName: contact.firstName || "",
        lastName: contact.lastName || "",
        email: (contact.emails && contact.emails[0].email) || "",
        phoneNumber:
          (contact.phoneNumbers && contact.phoneNumbers[0].number) || "",
        indicativeNumber:
          (contact.phoneNumbers && contact.phoneNumbers[0].countryCode) || "",
      };
    }
  }
};

export { convertTimeToString, importContact };
