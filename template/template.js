const mailTemplate = ({ name, qr }) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesmerizer</title>
</head>
<body>
Greetings <b>${name.join(",")}</b>!!

<p>We are delighted to inform you that your registration for Mesmerizer'24 has been successfully processed, and we extend a warm welcome to you as a valued participant. Your enthusiasm is pivotal in making this event an unforgettable experience for everyone involved.</p>

<p>Here are key details to ensure a seamless and enjoyable participation:</p>

<ol>
<li><b>Entry Pass:</b> Attached to this email, you will find your entry pass for Mesmerizer'24. Please keep this pass handy, as it will be required for entry throughout the duration of the event.</li>
<li><b>Event Date and Time:</b> Take note of the date and time of your chosen events. All participants are requested to arrive at least an hour before the scheduled start time.</li>
<li><b>Rules and Regulations:</b> Familiarize yourself with the rules and regulations outlined in the event's rulebook. Adherence to these guidelines is essential, as any disregard may result in disqualification.</li>
<li><b>Contact Information:</b> Should you have any queries or encounter difficulties, feel free to reach out to the respective event coordinators. They are here to assist and ensure your participation runs smoothly.</li>
</ol>

<p>We look forward to welcoming you to Mesmerizer'24 and hope you have a fantastic time. Wishing you good health and high spirits as you embark on this captivating journey.</p>
<p>Keep Mesmerizing!</p>

<p><b>Best regards,</b></p>
<p>Team Mesmerizer'24</p>



<p>
For Fest related queries:<br>
+91 81000 36329 [Pratiti Ganguli - President]<br>
+91 84209 24538 [Sarthak Das - General Secretary]<br>
</p>

<p>
For Event(s) related queries:<br>
+91 85840 90838 [Sinjan Mitra - Cultural Coordinator]<br>
+91 62953 56256 [Shimul Sarkar - Dy. Cultural Coordinator]<br>
</p>

<p>
For Payment related queries:<br>
+91 93303 09476 [Sujit Rungta - Treasurer]<br>
+91 85140 12811 [Anirban Ghana - Asst. Treasurer]<br>
</p>

<div>
<img src="cid:qr">
</div>

</body>
</html>
`)

module.exports = mailTemplate;
