function CustomBtn({children, bg}) {
  return (
    <div style={{background: bg || ''}} className='btn' href="#">
      {children}
    </div>
  );
}

export default CustomBtn;
