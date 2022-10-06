
const Form = () => {

    return (
     <div className="mt-40 mx-auto md:w-1/2 px-5">
        <h3 className="text-center text-3xl font-bold"> 
        Preencha os campos abaixo para obter gratuitamente a informação desejada</h3>
        <form className="flex flex-col justify-center items-center gap-4 mt-8">
            <div>
                <label className="font-medium text-sm">Nome: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>
            <div>
                <label className="font-medium text-sm">E-mail: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>
            <div className="mr-3">
                <label className="font-medium text-sm">Empresa: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded"></input>
            </div>
            <div className="mr-3">
                <input type="submit" className="bg-[#f2f000] w-[7rem] rounded p-0.5  m-5 hover:bg-[#f2ff02]" ></input>
            </div>
        </form>
    </div>

    );
}

export default Form;