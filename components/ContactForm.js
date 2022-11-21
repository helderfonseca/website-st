

export default function ContactForm() {
  return (
      <section id='forminfo' className="mt-32 mx-auto md:w-2/4 px-5">
         <h3 className="text-3xl mb-12 font-bold text-center"> 
            Preencha os campos abaixo para obter a nossa oferta especial Black Friday
        </h3>
        {/*<form className="flex flex-col justify-center items-center gap-4 mt-8">
            <div>
                <label className="font-medium text-sm">Name: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>
            <div>
                <label className="font-medium text-sm">E-mail: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded mb-3"></input>
            </div>
            <div className="mr-3">
                <label className="font-medium text-sm">Company: </label>
                <input type="text" className="border-[1px] border-neutral-500 w-96 rounded"></input>
            </div>
            <div className="mr-3">
                <input type="submit" className="bg-[#FBED04] w-[7rem] rounded p-0.5  m-5 hover:bg-[#FBED04]" ></input>
            </div>
        </form>*/}
        <div id="mlb2-5795106" className="text-center ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5795106">
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/h4u1n5" data-code="h4u1n5" method="post" target="_blank">
                <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-name">
                        <input aria-label="name" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Nome" autoComplete="name" />
                    </div>
                    </div>
                    <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="E-mail" autoComplete="email" />
                    </div>
                    </div>
                    <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-company">
                        <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Empresa" autoComplete="" />
                    </div>
                    </div>
                </div>
                <input type="hidden" name="ml-submit" value="1"/>
                <div className="ml-form-embedSubmit">
                    <button type="submit" className="primary">Enviar</button>
                    <button disabled="disabled" style={{display:"none"}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Carregando...</span> </button>
                </div>
                <input type="hidden" name="anticsrf" value="true"/>
                </form>
            </div>
            <div className="ml-form-successBody row-success" style={{display:"none"}}>
                <div className="ml-form-successContent">
                <h4>Obrigado!</h4>
                <p>Enviaremos sua proposta o mais rápido possível.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
      </section>
  );
}