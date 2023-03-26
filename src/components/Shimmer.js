const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div className='w-52 h-52 bg-gray-200 m-5 rounded-lg' key={index}></div>
        ))}
    </div>
  )
}

export default Shimmer
