exports.getUserProfile = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      name: "MockUser",
      email: "user@example.com",
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user Profile", error });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updateUser = { id: req.user.id, name, email };
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user Profile", error });
  }
};
