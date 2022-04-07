import { deviceType } from "~/utils/deviceType";

export default function ({ isServer, req, redirect, route }) {

  const userAgent = process.server
    ? req.headers["user-agent"]
    : navigator.userAgent;

  const isMobile = deviceType(userAgent).type !== 'pc'
  console.log(isMobile, route.fullPath, (route.fullPath.includes('/m') || route.fullPath.includes('/m/')))

  if ((route.fullPath.includes('/m') || route.fullPath.includes('/m/')) && !isMobile) {
    const url = route.fullPath.replace('/m', '')
    const redirectUrl = '/' + url
    const url2 = redirectUrl.replace(/\/\//g, '/')
    redirect(url2)
  }
  if (!(route.fullPath.includes('/m') || route.fullPath.includes('/m/')) && isMobile) {
    redirect(`/m${route.fullPath}`)
  }
}
