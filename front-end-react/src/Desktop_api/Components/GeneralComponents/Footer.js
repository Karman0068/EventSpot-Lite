
function Footer(){

  const footerList = [
    {id: 1, text: 'About'},
    {id: 2, text: 'Support'},
    {id: 3, text: 'Feedback'},
    {id: 4, text: 'Help'}
  ];


    return(
        <div className=' box-border
      flex  
      justify-center items-center z-50'>
        <div className="
            box-border     
            min-h-12 w-full
            flex justify-center items-center
            bg-slate-900">
                <ul className="
                  flex  flex-wrap
                  justify-around items-center 
                  min-w-[60%] ">

                    {footerList.map((item) => 
                      <li className="
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