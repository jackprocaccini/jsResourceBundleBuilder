package com.github;

import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
        //just adding another comment for git testing!
        if(args.length != 5){
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter the path of your JavaScript file: ");
            String inputPath = sc.nextLine();
            System.out.print("\nEnter your resource bundle name (i.e. ResourceBundle): ");
            String bundleName = sc.nextLine();
            System.out.print("\nEnter your resource bundle's locale language code (en, fr, ca, etc): ");
            String langCode = sc.nextLine();
            System.out.print("\nEnter your resource bundle's locale country code (US, FR, CA, etc): ");
            String countryCode = sc.nextLine();
            System.out.print("\nEnter the desired destination of your resource bundle: ");
            String outputPath = sc.nextLine();
            jsPropertiesBuilder builder = new jsPropertiesBuilder(inputPath, bundleName, new Locale(langCode, countryCode), outputPath);
        } else {
            jsPropertiesBuilder builder = new jsPropertiesBuilder(args[0], args[1], new Locale(args[2], args[3]), args[4]);
        }
        //lets add one more comment!
        //add another comment bc I still don't know whats going on
    }
}
