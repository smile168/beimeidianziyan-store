
// export const revalidate = 0;

import BottomBarActions from "./bottomBar-actions";
import Container from "./ui/container";

const BottomBar = async () => {
  return (
    <div className='border-b w-full z-10 bg-white fixed bottom-0 right-0 block md:hidden'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
         
          <BottomBarActions />
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
