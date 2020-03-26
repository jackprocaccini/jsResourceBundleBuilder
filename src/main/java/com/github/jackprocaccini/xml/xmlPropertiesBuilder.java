package com.github.jackprocaccini.xml;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;
import java.io.IOException;
import java.util.Properties;

public class xmlPropertiesBuilder extends DefaultHandler {
    private boolean dataFound;
    private boolean valueFound;
    private boolean dataCommentFound;
    private Properties props;
    private String key;

    public xmlPropertiesBuilder(File xmlFile) throws SAXException, IOException, ParserConfigurationException {
        SAXParserFactory factory = SAXParserFactory.newInstance();
        SAXParser parser = factory.newSAXParser();
        parser.parse(xmlFile, this);
        dataFound = false;
        valueFound = false;
        dataCommentFound = false;
        props = new Properties();
        key = "";
    }

//    public void readXMLFile(File xmlFile) throws SAXException, IOException, ParserConfigurationException {
//        SAXParserFactory factory = SAXParserFactory.newInstance();
//        SAXParser parser = factory.newSAXParser();
//        parser.parse(xmlFile, this);
//        dataFound = false;
//        valueFound = false;
//        dataCommentFound = false;
//        props = new Properties();
//        key = "";
//    }

    @Override
    public void startDocument() throws SAXException {
        System.out.println("Start Document");
    }

    @Override
    public void endDocument() throws SAXException {
        System.out.println("End Document");
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        if(qName.equals("data")){
            System.out.println("Start Element: " + qName);
            key = attributes.getValue("name");
            System.out.println("Key: " + attributes.getValue("name"));
            dataFound = true;
        } else if(qName.equals("value")){
            valueFound = true;
        } else if(qName.equals("comment")){
            dataCommentFound = true;
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
        if(qName.equals("data")){
            System.out.println("End Element: " + qName + "\n");
            dataFound = false;
        }

    }

    @Override
    public void characters(char[] ch, int start, int length) throws SAXException {
        String str = new String(ch, start, length);
        str = str.trim(); //used to make sure empty lines aren't being put into the properties file
        if(valueFound && dataFound && !str.isEmpty()){
            System.out.println("Value: " + str);
            valueFound = false;
        } else if(dataCommentFound && !str.isEmpty()){
            System.out.println("Comment: " + str);
            dataCommentFound = false;
        }
    }

    public String getKey(){
        return key;
    }
}
