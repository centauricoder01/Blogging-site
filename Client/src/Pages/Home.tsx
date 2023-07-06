import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='w-4/5 m-auto text-8xl mt-16 text-center font-black'>
          Shaping a world with reimagination.
        </h1>
        <p className='w-3/5 m-auto text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus molestias rem error minus laborum architecto, nesciunt in corporis saepe unde tenetur a soluta, beatae dolor doloremque quae officia dicta.</p>
        <div className='flex items-center	justify-center mt-10 gap-5'>
          <button className='p-3 rounded-full bg-fuchsia-500 font-bold'>Something</button>
          <button className='p-3 rounded-full bg-fuchsia-500 font-bold'>Anotherthing</button>
        </div>
      </div>
      <hr className='mt-10 w-3/5 m-auto' />
      <div className='flex items-center justify-center w-3/5 m-auto gap-20 text-center mt-5'>
        <div>
          <p className='font-bold'>The Lowest Price </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p className='font-bold'>The Lowest Price </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p className='font-bold'>The Lowest Price </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <hr className='mt-5 w-3/5 m-auto' />
    </>
  );
}

export default Home