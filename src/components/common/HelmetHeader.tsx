import { Helmet } from "react-helmet"

type HelmetProps = {
  title: string,
  desc: string,
}

const HelmetHeader = ({ title, desc }: HelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  )
}

export default HelmetHeader