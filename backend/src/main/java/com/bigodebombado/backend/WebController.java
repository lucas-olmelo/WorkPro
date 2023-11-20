package com.bigodebombado.backend;

import conexaoBanco.Conecta;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.util.List;

@RestController
public class WebController {

//    @CrossOrigin
//    @RequestMapping(value = "/workpro", method = RequestMethod.GET)
//    public List<String[]> conectaAngular() {
//        System.out.println("Conectando ao Banco");
//
//        Conecta con = new Conecta();
//        Connection connection = con.connectionMySql();
//
//        List<String[]> post = con.getPosts();
//        System.out.println(post);
//
//        con.closeConnectionMySql(connection);
//        return post;
//    }

    @CrossOrigin
    @RequestMapping(value = "/workpro", method = RequestMethod.POST)
    public void conectaAngular(String text, String date) {
        System.out.println("Conectando ao Banco");

        Conecta con = new Conecta();
        Connection connection = con.connectionMySql();

        con.postPost(text, date);
        System.out.println("Post: " + text + ", " + date + "\n Postado com sucesso!");
        con.closeConnectionMySql(connection);
    }
}
