<?php
/**
 * TfaLanguage
 *
 * PHP version 7.2
 *
 * @category Class
 * @package  Infobip
 * @author   Infobip Support
 * @link     https://www.infobip.com
 */

/**
 * Infobip Client API Libraries OpenAPI Specification
 *
 * OpenAPI specification containing public endpoints supported in client API libraries.
 *
 * Contact: support@infobip.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

namespace Infobip\Model;

use Infobip\ObjectSerializer;

/**
 * TfaLanguage Class Doc Comment
 *
 * @category Class
 * @package  Infobip
 * @author   Infobip Support
 * @link     https://www.infobip.com
 */
class TfaLanguage
{
    /**
     * Possible values of this enum
     */
    public const EN = 'en';
    public const ES = 'es';
    public const CA = 'ca';
    public const DA = 'da';
    public const NL = 'nl';
    public const FR = 'fr';
    public const DE = 'de';
    public const IT = 'it';
    public const JA = 'ja';
    public const KO = 'ko';
    public const NO = 'no';
    public const PL = 'pl';
    public const RU = 'ru';
    public const SV = 'sv';
    public const FI = 'fi';
    public const HR = 'hr';
    public const SL = 'sl';
    public const PT_PT = 'pt-pt';
    public const PT_BR = 'pt-br';
    public const ZH_CN = 'zh-cn';
    public const ZH_TW = 'zh-tw';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::EN,
            self::ES,
            self::CA,
            self::DA,
            self::NL,
            self::FR,
            self::DE,
            self::IT,
            self::JA,
            self::KO,
            self::NO,
            self::PL,
            self::RU,
            self::SV,
            self::FI,
            self::HR,
            self::SL,
            self::PT_PT,
            self::PT_BR,
            self::ZH_CN,
            self::ZH_TW,
        ];
    }
}