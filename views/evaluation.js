import React from "react";

class Evaluation extends React.Component {
  render() {
    return (
      <>
        <h1 class="title">Evaluation</h1>
        <p>
          The UTR requires fewer people to operate it as algorithms do much of
          the work. Of course, some of the work saved is lost to having to
          direct manpower towards developing and monitoring algorithms, but
          overall it will save time and allow the government to be smaller and
          thus more flexible than other structures. The use of algorithms also
          encourages people towards productivity. This means that the overall
          number of resources produced will increase. This comes with the
          downside that people are encouraged to perform to inflexible metrics
          which do not account for the need to be creative and innovative at
          work. The government of the UTR ensures that ‘competent’ people are
          elected. While in theory good, the claim that a system is meritocratic
          is used to cover up for biases and discrimination within that system.
        </p>
        <p>
          The downside of algorithmic control lies in its inability to
          generalise. Algorithms, particularly the algorithms we are thinking
          about in this context which come chiefly from computer science, are
          fundamentally optimisation algorithms which have been applied to the
          modelling of data, trying to reduce some metric for the error between
          the algorithm’s predictions and the ‘true’ values in the dataset being
          trained upon. The dataset in question might be biased
          (unrepresentative) or inaccurate which would invalidate the algorithm
          as it would not make correct predictions for real world examples it
          comes across.
        </p>
      </>
    );
  }
}

export { Evaluation };
