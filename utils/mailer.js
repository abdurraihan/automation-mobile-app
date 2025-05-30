import nodemailer from 'nodemailer';

const TO_EMAIL = 'shahriarc19@gmail.com';

export const sendEmail = async (contact, feq) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: contact.email,
    to: TO_EMAIL,
    subject: 'New FEQ Submission',
   html: `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
    <div style="background-color: #007BFF; color: white; padding: 16px; text-align: center; border-radius: 8px 8px 0 0;">
      <h2 style="margin: 0;">New FEQ Submission</h2>
    </div>

    <div style="padding: 20px;">
      <h3 style="color: #007BFF; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Contact Information</h3>
      <table cellspacing="0" cellpadding="6" width="100%">
        <tr><td><strong>Name:</strong></td><td>${contact.name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${contact.email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${contact.phone}</td></tr>
        <tr><td><strong>Address:</strong></td><td>${contact.address}</td></tr>
      </table>

      <h3 style="color: #007BFF; border-bottom: 1px solid #ddd; margin-top: 30px; padding-bottom: 5px;">FEQ Details</h3>
      <table cellspacing="0" cellpadding="6" width="100%">
         <tr><td><strong>Type OF Vehicale:</strong></td><td>${feq.Type_of_vehicle}</td></tr>
        <tr><td><strong>Interests:</strong></td><td>${feq.carInterests.join(', ')}</td></tr>
        <tr><td><strong>Budget:</strong></td><td>${feq.budget}</td></tr>
        <tr><td><strong>Lease or Buy:</strong></td><td>${feq.leaseOrBuy}</td></tr>
        <tr><td><strong>New or Used:</strong></td><td>${feq.newOrPreOwned}</td></tr>
        <tr><td><strong>Trade-In:</strong></td><td>${feq.tradeIn ? 'Yes' : 'No'}</td></tr>
        <tr><td><strong>Color Preference:</strong></td><td>${feq.colorPreference}</td></tr>
        <tr><td><strong>Buying For:</strong></td><td>${feq.buyingFor}</td></tr>
        <tr><td><strong>Passengers:</strong></td><td>${feq.passengers}</td></tr>
        <tr><td><strong>hoping to accomplish today:</strong></td><td>${feq.hoping_to_accomplish_today}</td></tr>
      </table>
    </div>

   
  </div>
`

  };

  await transporter.sendMail(mailOptions);
};
