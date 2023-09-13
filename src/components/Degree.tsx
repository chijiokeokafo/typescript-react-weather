const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span onClick={() => alert('convert to farenheit')}>
      {temp}
      <sup>o</sup>
    </span>
  </>
)

export default Degree
