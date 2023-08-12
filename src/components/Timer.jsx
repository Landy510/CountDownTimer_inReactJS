import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';

const Timer = ({mediaData}) => {
  const [lastTimeInSec, setLastTimeInSec] = useState(0);
  const timerId = useRef(null);

  useEffect(() => {
    if(lastTimeInSec && !timerId.current) {
      timerId.current = setInterval(() => {
        setLastTimeInSec(prev => prev - 1)
        if(lastTimeInSec === 1) {
          mediaData.onEnd && mediaData.onEnd()
        }
      }, 1000)
    }

    return () => {
      timerId.current && clearInterval(timerId.current);
      timerId.current = null;
    }
  }, [mediaData, lastTimeInSec])

  useEffect(() => {
    setLastTimeInSec(mediaData.val)
  }, [mediaData])


  return (
    <p>{ lastTimeInSec }</p>
  )
}

export default Timer

Timer.propTypes  = {
  mediaData: PropTypes.shape({
    val: PropTypes.number.isRequired,
    onEnd: PropTypes.func
  })
}