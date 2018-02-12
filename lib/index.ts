
interface Multilingual {
  /**
   * Language tag defined by RFC5646.
   * @minLength 2
   * @maxLength 35
   */
  lang?: string;
};

interface MultilingualString extends Multilingual {

  /**
   * String written in the language specified by `lang`
   * @pattern [^\n]+
   * @minLength 0
   * @maxLength 1024
   */
  s: string;
}

interface MultilingualText extends Multilingual {

  /**
   * Text written in the language specified by `lang`
   * @minLength 0
   * @maxLength 65536
   */
  t: string;
}


interface MetaData {
  /**
   * Display name for the content
   */
  name?: MultilingualString;

  /**
   * Owner's nickname.
   */
  owner?: MultilingualString;

  /**
   * Relative path to the content.
   * @default "content.bin"
   *
   */
  path: MultilingualString;

  /**
   * Content type for the content
   * @default "application/octet-stream"
   */
  contentType?: MultilingualString;

  /**
   * Tag information that helps searchs
   * @minItems 1
   * @maxItems 50
   */
  tags?: MultilingualString[];

  /**
   * Short description.
   */
  description?: MultilingualText;

  /**
   * True if the content is encrypted by Uploader.
   *
   * This will be set by Storm Uploader.
   *
   * @type boolean
   * @default false
   */
  encrypted?: number

  /**
   * Creation time.
   *
   * This is just a hint giving to Storm Scanner
   * Storm Scanner may determine the last update date
   * from both this and Monacoin blockchain.
   *
   * @format date-time
   */
  created?: string;

  /**
   * Last update time.
   *
   * This is just a hint giving to Storm Scanner
   * Storm Scanner may determine the last update date
   * from both this and Monacoin blockchain.
   *
   * @format date-time
   */
  updated?: string

};
