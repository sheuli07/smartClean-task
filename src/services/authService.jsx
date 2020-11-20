export const authService = {
    login: (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.username == "sheulimondal" && data.password == "sheuli"
                    ? resolve({
                          name: data.username,
                          success: true,
                          message: "Successfully Logged In",
                      })
                    : reject({
                          success: false,
                          message: "No such user",
                      });
            }, 1000);
        });
    },
};
