
function Footer(){

  const footerList = [
    {id: 121, text: 'About'},
    {id: 122, text: 'Support'},
    {id: 123, text: 'Feedback'},
    {id: 124, text: 'Help'}
  ];


    return(
        <div className='box-border
      flex  
      justify-center items-center z-50'>
        <div className="
            box-border     
            h-12 w-full
            flex justify-center items-center
            bg-slate-900">
                <ul className="
                  flex  flex-wrap
                  justify-around items-center 
                  min-w-[60%] ">

                    {footerList.map((item) => 
                      <li key={item.id} className="
                        text-gray-400  
                        p-2"> 
                        <a href="#" className="hover:text-pink-700 active:text-pink-500">{item.text}</a>
                      </li>)
                    }

                </ul>
        </div>
      </div>
        
    );
}

export default Footer;