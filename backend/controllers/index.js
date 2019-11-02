const User = require('../models/User')
const nodemailer = require('nodemailer')
const passport = require('passport')


exports.toSignup = async(req, res) => {
    try{
        const {name, lastname, username, email, status, confirmationStatus, profilePhoto} = req.body
        const password = req.body.password

        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

        let confirmationCode = ''
        
        for (let i = 0; i < 25; i++){confirmationCode += characters[Math.floor(Math.random() * characters.length)]}

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        await User.findOne({ email }, 'email', (err, user) => {
            if (user !== null) {
                return res.status(401).json({ message: 'Esta cuenta de correo ya está registrada.' })
            } else {

                transporter.sendMail({
                    from: `+aid - Una plataforma para ayudarte a vivir mejor. <${process.env.EMAIL}>`,
                    to: email,
                    subject: 'Confirma tu cuenta',
                    html: `

                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <title></title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @media (max-width: 620px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col > div {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num8 {
          width: 66% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    class="clean-body"
    style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: rgb(107,28,29); background: linear-gradient(90deg, rgba(107,28,29,1) 0%, rgba(171,44,47,1) 31%, rgba(247,64,67,1) 100%);"
  >
    <table
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: rgb(107,28,29); background: linear-gradient(90deg, rgba(107,28,29,1) 0%, rgba(171,44,47,1) 31%, rgba(247,64,67,1) 100%); width: 100%;"
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
            <div style="background-color:transparent;">
              <div
                class="block-grid"
                style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"
              >
                <div
                  style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                >
                  <div
                    class="col num12"
                    style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"
                  >
                    <div style="width:100% !important;">
                      <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 30px; padding-bottom: 30px; padding-left: 30px;"
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="0"
                                  role="presentation"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;"
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        height="0"
                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div
                class="block-grid"
                style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;"
              >
                <div
                  style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;"
                >
                  <div
                    class="col num12"
                    style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"
                  >
                    <div style="width:100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                      >
                        <div
                          style="color:#0D0D0D;font-family:'Open Sans', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                        >
                          <div
                            style="line-height: 1.2; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 12px; color: #0D0D0D; mso-line-height-alt: 14px;"
                          >
                            <p
                              style="line-height: 1.2; text-align: center; font-size: 28px; mso-line-height-alt: 34px; margin: 0;"
                            >
                              <span style="font-size: 28px;"
                                ><strong>¡Hola, ${username}!</strong></span
                              >
                            </p>
                            <p
                              style="line-height: 1.2; text-align: center; font-size: 28px; mso-line-height-alt: 34px; margin: 0;"
                            >
                              <span style="font-size: 28px;"
                                >Tu cuenta se ha creado con éxito</span
                              >
                            </p>
                          </div>
                        </div>
                        <div
                          style="color:#0D0D0D;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.5;padding-top:20px;padding-right:50px;padding-bottom:10px;padding-left:50px;"
                        >
                          <div
                            style="font-size: 12px; line-height: 1.5; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #0D0D0D; mso-line-height-alt: 18px;"
                          >
                            <p
                              style="font-size: 16px; line-height: 1.5; text-align: center; mso-line-height-alt: 24px; margin: 0;"
                            >
                              <span style="font-size: 16px;"
                                >Para finalizar el proceso es importante que
                                confirmes tu cuenta de correo haciendo clic en
                                el siguiente botón.</span
                              >
                            </p>
                            <p
                              style="font-size: 14px; line-height: 1.5; text-align: center; mso-line-height-alt: 21px; margin: 0;"
                            ></p>
                            <p
                              style="font-size: 16px; line-height: 1.5; text-align: center; mso-line-height-alt: 24px; margin: 0;"
                            >
                              <span style="font-size: 16px;"
                                >Si no haz registrado tu correo en (+)aid,
                                ignora este correo.</span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <div
                          align="center"
                          class="button-container"
                          style="padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px;"
                        >
                        <a href="${req.headers.origin}/confirmar-cuenta/${confirmationCode}"><div
                            style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#ac2c2e;border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;width:auto; width:auto;;border-top:1px solid #ac2c2e;border-right:1px solid #ac2c2e;border-bottom:1px solid #ac2c2e;border-left:1px solid #ac2c2e;padding-top:10px;padding-bottom:10px;font-family:'Open Sans', Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                          >
                            <span
                              style="padding-left:15px;padding-right:15px;font-size:16px;display:inline-block;"
                            >
                              <span
                                style="font-size: 16px; line-height: 2; mso-line-height-alt: 32px;"
                                ><strong>Confirmar cuenta</strong></span
                              >
                            </span>
                          </div></a>
                        </div>
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; width: 100%;"
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="background-color:transparent;">
              <div
                class="block-grid"
                style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"
              >
                <div
                  style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"
                >
                  <div
                    class="col num12"
                    style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"
                  >
                    <div style="width:100% !important;">
                      <div
                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 30px; padding-bottom: 30px; padding-left: 30px;"
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="0"
                                  role="presentation"
                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;"
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        height="0"
                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

                    `
                })
    
                User.register(new User({name, lastname, username, email, status, confirmationStatus, confirmationCode, profilePhoto}),
                password, (err, account) => err ? res.json({err}) : res.status(201).json({account}))
            }
        })
    } catch (err){
        res.status(500).json({err})
    }
}

exports.toConfirm = (req, res, next) => {
    User.find({ confirmationCode: req.params.id }).then(user => {
        let id = user[0]._id
    
        User.findByIdAndUpdate(id, { confirmationStatus: 'Active' }, function(err, result) {
            if (err) {
                res.status(401).json({ err })
            }
            let userEmail = user[0].email
            let userId = user[0]._id
            res.status(201).json({ userEmail, userId })
        })
    })
}

exports.toLogin = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return res.status(401).json({ err })
        }
        if (!user) {
            return res.status(401).json({ err })
        }

        req.logIn(user, err => {
            if (err) {
                return res.status(401).json({ err })
            }
            if (user.confirmationStatus === 'Pending Confirmation') {
                return res.status(401).json({ message: 'Por favor verifica tu cuenta' })
            }
            return res.status(200).json({user})
        })
    })(req, res, next)
  }


exports.toLogout = (req, res) => {
    req.logout();
    res.status(200).json({ msg: 'Logged out' })
}

exports.toProfile = async(req, res) => {
    User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
}

exports.toUpdate = async(req, res) => {
    try{
        let user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true })
        res.status(201).json({user})
    } catch (err){
        res.status(500).json({err})
    }
}