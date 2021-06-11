function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    //store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(message);

    res.status(201).json({ message: 'Messasge stored successfully' });
  }
}

export default handler;
