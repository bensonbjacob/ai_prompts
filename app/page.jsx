import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>
          AI Powered Prompts
        </span>
      </h1>
      <p className='desc text-center'>
        Prompts allows users to create, discover, and share AI
        prompts, fostering a collaborative environment for creative
        writing and ideation. With Prompts, you can unleash your
        imagination and explore a diverse range of prompts contributed
        by others.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
