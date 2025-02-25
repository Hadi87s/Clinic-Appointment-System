interface IProps {
    src: string;
    height: string
}

const BlobBackground = ({src,height}: IProps) => {
  return (
    <div className={`${height} w-[100%] absolute inset-0 -z-1`} style={{backgroundImage: `url(${src})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
  )
}

export default BlobBackground
