import PropTypes from 'prop-types';

export default function Section({ title, subtitle, children, className, ...props }) {
  return (
    <section className={`px-4 py-8 md:p-8 ${className}`} {...props}>
      <div className='m-auto max-w-screen-lg'>

        <header className='mb-8 text-center'>
          <h2 className='mb-4 font-semibold text-4xl text-teal-400'>
            {title}
          </h2>
          <p className='text-emerald-400'>
            {subtitle}
          </p>
        </header>

        {children}

      </div>
    </section>
  )
}
