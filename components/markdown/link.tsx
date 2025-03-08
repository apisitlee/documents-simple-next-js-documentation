import Link from "next/link"

interface Routed {
  href?: string
  target?: string
  children: React.ReactNode
}

const RoutedLink: React.FC<Routed> = ({ href = "#", target = "_self", children }) => {
  const isInternal = href.startsWith("/") || href.startsWith("#")

  if (isInternal) {
    return (
      <Link href={href} passHref>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default RoutedLink
