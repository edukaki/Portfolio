import React from 'react';
import Button from '../Button';

const ContactCall = () => {
  return (
    <section className="py-16 md:flex md:flex-row md:justify-between">
      <h1 className="text-center pb-10 md:max-w-[350px]">
        Interested in doing a project together?
      </h1>
      <div className="hidden md:flex flex-row w-full">
        <div className="grid grid-rows-2 w-full flex-1 pl-8 pr-4 xl:pr-10 xl:pl-12">
          <div className="border-light-grey border-b-2"></div>
        </div>
        <Button text="Contact me" secondary />
      </div>
      <div className="md:hidden">
        <Button text="Contact me" secondary />
      </div>
    </section>
  );
};

export default ContactCall;
