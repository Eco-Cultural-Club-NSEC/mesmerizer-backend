const mailTemplate = ({ name, qr }) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesmerizer</title>
</head>
<body>
 Hello ${name}!
<img src="cid:qr">
</body>
</html>
`)

module.exports = mailTemplate;
