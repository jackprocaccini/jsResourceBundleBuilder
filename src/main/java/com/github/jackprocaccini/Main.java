package com.github.jackprocaccini;

import com.github.jackprocaccini.xml.xmlPropertiesBuilder;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
        xmlPropertiesBuilder builder = new xmlPropertiesBuilder();
        builder.readXMLFile(new File("src/main/resources/EmployeeHome.resx"));
    }
}
