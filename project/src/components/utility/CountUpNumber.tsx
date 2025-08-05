import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

type CountUpNumberProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  duration = 2.5,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent ${className}`}
    >
      {start && (
        <CountUp
          end={end}
          duration={duration}
          separator=","
          prefix={prefix}
          suffix={suffix}
        />
      )}
      {!start && <>{prefix}{suffix}</>}
    </span>
  );
};

export default CountUpNumber;
