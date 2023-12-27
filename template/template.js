const mailTemplate = ({ name, qr }) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesmerizer</title>
</head>
<body>
 Hello <b>${name.join(",")}</b>
<p>Once again, the Eco-Cultural Club of NSEC presents MESMERIZER '24 - our annual cultural fest!!❤‍🔥</p>
<p>Hold your breath as we take you through our miraculous journey of finding and honing the best of talents!! Participate in our three-day cultural carnival, celebrating the idea of 'Myth, Magic, Mayhem' 🔥💥</p>
<p>Registrations begin from 28th December, 2023, 10:00AM onwards. Visit our website, <a href="https://mesmerizernsec.live/">www.mesmerizernsec.live</a> - To register yourself and enrapture them with your hidden talents!✨</p>

<div>
<img src="cid:qr">
</div>

</body>
</html>
`)

module.exports = mailTemplate;
