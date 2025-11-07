export function validateCertification(form) {
  let errors = {};
  if (!form.name || form.name.trim() === "") errors.name = "Certification name required";
  if (!form.issuedBy || form.issuedBy.trim() === "") errors.issuedBy = "Issuer required";
  if (!form.expiryDate) errors.expiryDate = "Expiry date required";
  return errors;
}
