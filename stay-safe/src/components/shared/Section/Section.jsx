import PropTypes from 'prop-types';

export default function Section({ title, subtitle, children, className, ...props }) {
  return (
    <section className={` ${className}`} {...props}>
      <div className='m-auto px-4 py-8 md:p-8 max-w-screen-xl'>

        <header className='mb-8 text-center'>
          <h2 className='mb-4 font-semibold text-4xl text-teal-400'>
            {title}
          </h2>
          <p className='text-emerald-400 xl:'>
            {subtitle}
          </p>
        </header>

        {children}

      </div>
    </section>
  )
}
