const logoutController = {};

logoutController.logout = async (rec, res)=> {
    res.clearCookie("authToken")

    return res.json({message: "Serrion cesada"})
};

export default logoutController;