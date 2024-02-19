type SVGProps = React.SVGProps<SVGSVGElement>

export const Logo = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" {...props}>
    <path
      fill="currentColor"
      d="M700,255.4c-36.19,47.95-123.15,63.93-123.15,63.93,99.18-41.83,118.28-189.17,118.28-189.17-63.93,143.37-193.05,149.49-193.05,149.49,185.06-69.57,161.5-244.44,161.5-244.44,4.85,138.32-218.21,202.69-218.21,202.69,2.57-4.44,12.47-14.64,12.47-14.64-58.79,39.76-58.8,59.4-70.31,83.88-11.51,24.48-28.29,76.62-29.09,100.22-.31,9.22,1.57,18.39,5.68,26.65,4.56,9.16,9.65,23.97,1.73,34.06-14.75,18.77-15.83,35.12-15.83,35.12,0,0-1.08-16.35-15.83-35.12-7.93-10.08-2.83-24.9,1.73-34.06,4.11-8.26,5.99-17.43,5.68-26.65-.8-23.6-17.57-75.74-29.09-100.22-11.51-24.47-11.52-44.12-70.31-83.88,0,0,9.9,10.2,12.47,14.64,0,0-223.06-64.37-218.21-202.69,0,0-23.56,174.87,161.5,244.44,0,0-129.13-6.13-193.05-149.49,0,0,19.1,147.33,118.28,189.17,0,0-86.96-15.98-123.15-63.93,0,0,102.12,161.76,243.04,152.88,0,0,17.58,92.71-44.76,167.83,0,0,83.75-38.69,96.44-109.19,0,0,7.99,41.36,18.33,53.59,6.6,7.8,15.69,34.95,21.41,53.57,3.62,11.81,6.52,23.83,8.66,36,2.97,16.85,6.88,41.56,6.88,54.71,0-13.15,3.91-37.86,6.88-54.71,2.14-12.17,5.03-24.19,8.66-36,5.71-18.62,14.8-45.77,21.41-53.57,10.34-12.22,18.33-53.59,18.33-53.59,12.69,70.51,96.44,109.19,96.44,109.19-62.34-75.13-44.76-167.83-44.76-167.83,140.92,8.88,243.04-152.88,243.04-152.88Z"
    />
  </svg>
)

export const Close = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    <line x1="3.2" y1="2.8" x2="12.8" y2="13.2" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
  </svg>
)

export const Starknet = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M20.5,20.9,17,31.4a1.1,1.1,0,0,1-1.5.5,1.2,1.2,0,0,1-.5-.5L11.5,20.9a.8.8,0,0,0-.4-.4L.6,17a1.1,1.1,0,0,1-.5-1.5L.6,15l10.5-3.5a.8.8,0,0,0,.4-.4L15,.6A1.1,1.1,0,0,1,16.5.1l.5.5,3.5,10.5.4.4L31.4,15a1.1,1.1,0,0,1,.5,1.5,1.2,1.2,0,0,1-.5.5L20.9,20.5Z" />
  </svg>
)

export const CarretRight = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      d="M5.6,23.4L5.6,23.4c-0.8-0.8-0.8-2,0-2.8c0,0,0,0,0,0l8.7-8.6L5.6,3.4c-0.8-0.8-0.8-2,0-2.8c0,0,0,0,0,0l0,0
	c0.8-0.8,2-0.8,2.8,0l10.1,10c0.8,0.8,0.8,2,0,2.8c0,0,0,0,0,0l-10.1,10C7.6,24.2,6.4,24.2,5.6,23.4z"
    />
  </svg>
)

export const Checkmark = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <polyline
      fill="none"
      stroke="currentColor"
      points="12.9,5.7 6.4,12.3 3.1,9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const Jediswap = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" fill="currentColor" {...props}>
    <polygon points="297 252 282 278 27 278 0 328 360 328 297 252" />
    <polygon points="63 108 78 82 333 82 360 32 0 32 63 108" />
    <polygon points="225.5 205 105.5 205 134.5 155 254.5 155 225.5 205" />
  </svg>
)

export const Ekubo = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="currentColor" {...props}>
    <path
      d="M30.6,6.4H5.4c-3,0-5.4,2.4-5.4,5.4v12.5c0,3,2.4,5.4,5.4,5.4h25.2c3,0,5.4-2.4,5.4-5.4V11.7C36,8.8,33.6,6.4,30.6,6.4z
	 M25.2,25.2c-4,0-7.2-3.2-7.2-7.2c0,4-3.2,7.2-7.2,7.2c-4,0-7.2-3.2-7.2-7.2s3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2
	c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2S29.2,25.2,25.2,25.2z"
    />
  </svg>
)
