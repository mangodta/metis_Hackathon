
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: "426f70d3-8c40-4d02-baea-37ff317bc16d",
  redirectUri: "http://127.0.0.1",
  scope: "openid wallet"
})

  uauth.user()
  .then((user) => {
    // user exists
    console.log("User information:", user)
  })
  .catch(() => {
    // user does not exist
  })

window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }
  
  
window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }
  