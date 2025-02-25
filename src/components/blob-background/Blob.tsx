interface IProps {
    src: string;
    height: string;
    sh: string;
}

const BlobBackground = ({src,height,sh}: IProps) => {
  return (
    <div className={`${sh} ${height} w-[100%] absolute inset-0 -z-1`} style={{backgroundImage: `url(${src})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
  )
}

export default BlobBackground
