package com.github.jackprocaccini;

import com.github.jackprocaccini.js.jsPropertiesBuilder;
import com.github.jackprocaccini.xml.xmlPropertiesBuilder;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
        xmlPropertiesBuilder builder = new xmlPropertiesBuilder(new File("src/main/resources/EmployeeHome.es-ES.resx"));
//        builder.getProps().list(System.out);
        System.out.println(builder.getLanguage());
//
//        System.out.println("\n-------------------------\n");
//
//        jsPropertiesBuilder jsBuilder = new jsPropertiesBuilder(new File("src/main/resources/time-en.js"));
//        jsBuilder.getProps().list(System.out);
    }
}
