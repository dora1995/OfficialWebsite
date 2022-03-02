import { deviceType } from "~/utils/deviceType";

export default function ({ isServer, req, redirect, route }) {

  const userAgent = process.server
    ? req.headers["user-agent"]
    : navigator.userAgent;

  const isMobile = deviceType(userAgent).type !== 'pc'
  console.log(isMobile)

  if ((route.fullPath.includes('/m') || route.fullPath.includes('/m/')) && !isMobile) {
    const url = route.fullPath.substring(2)
    redirect(url)
  }
  if ((!route.fullPath.includes('/m') || !route.fullPath.includes('/m/')) && isMobile) {
    const url = route.fullPath.substring(2)
    redirect(`/m${url}`)
  }
}
