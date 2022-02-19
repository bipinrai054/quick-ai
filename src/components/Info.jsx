const Info = () => {
  return (
    <div className='information container p-5'>
      <div className='row'>
        <div className='col-lg-3 text-center'>
          <i className='las la-lock'></i>
          <h4>100% Secure Payments</h4>
          <p>Moving your card details to a much more secured place.</p>
        </div>
        <div className='col-lg-3 text-center'>
          <i className='las la-thumbs-up'></i>
          <h4>Trust Pay</h4>
          <p>100% Payment Protection. Easy Return Policy.</p>
        </div>
        <div className='col-lg-3 text-center'>
          <i className='las la-bullhorn'></i>
          <h4>Refer & Earn</h4>
          <p>Invite a friend to sign up and earn up to $100.</p>
        </div>
        <div className='col-lg-3 text-center'>
          <i className='las la-phone'></i>
          <h4>24X7 Support</h4>
          <p>We're here to help. Have a query and need help ? Click here</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
