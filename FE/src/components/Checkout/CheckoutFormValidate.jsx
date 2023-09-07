import * as Yup from "yup";
const CheckoutFormValidate = Yup.object().shape({
  firstName: Yup.string().required("First name cannot be empty.").min(1),
  lastName: Yup.string().required("Last name cannot be empty.").min(1),
  companyName: Yup.string(),
  countryOrRegion: "",
  streetAddress: Yup.string().required("Street address cannot be empty."),
  postcodeOrZip: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be at least 10 digits or more."),
  townOrCity: Yup.string().required("Town / City cannot be empty."),
  phone: Yup.string()
    .required("Phone cannot be empty.")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits or more."),
  emailAddress: Yup.string()
    .email("Invalid email.")
    .required("Email cannot be empty."),
  notes: "",
});
export default CheckoutFormValidate;
