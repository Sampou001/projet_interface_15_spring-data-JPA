package com.mycompany.invoise.invoise_web.api;

import com.mycompany.invoise.core.entity.Invoice;
import com.mycompany.invoise.core.service.InvoiceServiceInterface;
import com.mycompany.invoise.invoise_web.form.InvoiceForm;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/invoice")
public class InvoiceResource {
    @Autowired
    private InvoiceServiceInterface invoiceService;

    public InvoiceServiceInterface getInvoiceService() {
        return invoiceService;
    }

    public void setInvoiceService(InvoiceServiceInterface invoiceService) {
        this.invoiceService = invoiceService;
    }

    @PostMapping
    //@ResponseBody
    public  Invoice create(@RequestBody Invoice invoice){

        return invoiceService.createInvoice(invoice);
    }



    @GetMapping()
    //@ResponseBody
    public Iterable<Invoice> list(){
        System.out.println("La méthode display Home a été invoquée");

        return invoiceService.getInvoiceList();
    }

    @GetMapping("/{id}")
    //@ResponseBody
    public Invoice  get(@PathVariable("id") String number){
        System.out.println("La méthode displayInvoice a été invoquée");

        return invoiceService.getInvoiceByNumber(number);
    }
    /*
    @GetMapping("/create-form")
    public String displayInvoiceCreateForm(@ModelAttribute InvoiceForm invoiceForm){
        return "invoice-create-form";
    }

     */
}
