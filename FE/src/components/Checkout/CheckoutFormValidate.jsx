import * as Yup from "yup";

const CheckoutFormValidate = Yup.object().shape({
  firstName: Yup.string().required("First name cannot be empty.").min(1),
  lastName: Yup.string().required("Last name cannot be empty.").min(1),
  companyName: Yup.string(),
  countryOrRegion: "",
  streetAddress: Yup.string().required("Street address cannot be empty."),
  postcodeOrZip: Yup.number("Code need to be numbers."),
  townOrCity: Yup.string().required("Town / City cannot be empty."),
  phone: Yup.number("Phone need to be numbers.")
    .required("Phone cannot be empty.")
    .min(10, "Must be at least 10 digits or more."),
  emailAddress: Yup.string()
    .email("Invalid email.")
    .required("Email cannot be empty."),
  notes: "",
});
export default CheckoutFormValidate;
