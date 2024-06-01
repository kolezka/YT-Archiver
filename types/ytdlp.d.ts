declare global {
  namespace YTDLPBin {
    export interface Response {
      id: string
      __timestamp: number
      channel: string
      channel_id: string
      title: string
      availability: any
      channel_follower_count: number
      description: string
      tags: any[]
      thumbnails: Thumbnail[]
      uploader_id: string
      uploader_url: string
      modified_date: any
      view_count: any
      playlist_count: number
      uploader: string
      channel_url: string
      _type: string
      entries: Entry[]
      extractor_key: string
      extractor: string
      webpage_url: string
      original_url: string
      webpage_url_basename: string
      webpage_url_domain: string
      release_year: any
      epoch: number
      __files_to_move: FilesToMove
      _version: Version
    }

    export interface Thumbnail {
      url: string
      height?: number
      width?: number
      preference?: number
      id: string
      resolution?: string
    }

    export interface Entry {
      id: string
      __entry__dir: string
      title: string
      formats: Format[]
      thumbnails: Thumbnail2[]
      thumbnail: string
      description: string
      channel_id: string
      channel_url: string
      duration: number
      view_count: number
      average_rating: any
      age_limit: number
      webpage_url: string
      categories: string[]
      tags: string[]
      playable_in_embed: boolean
      live_status: string
      release_timestamp?: number
      _format_sort_fields: string[]
      automatic_captions: AutomaticCaptions
      subtitles: Subtitles
      comment_count: number
      chapters: any
      heatmap?: Heatmap[]
      like_count: number
      channel: string
      channel_follower_count: number
      uploader: string
      uploader_id: string
      uploader_url: string
      upload_date: string
      availability: string
      original_url: string
      webpage_url_basename: string
      webpage_url_domain: string
      extractor: string
      extractor_key: string
      playlist_count: number
      playlist: string
      playlist_id: string
      playlist_title: string
      playlist_uploader: string
      playlist_uploader_id: string
      n_entries: number
      playlist_index: number
      __last_playlist_index: number
      playlist_autonumber: number
      display_id: string
      fulltitle: string
      duration_string: string
      release_year?: number
      is_live: boolean
      was_live: boolean
      requested_subtitles: any
      _has_drm: any
      epoch: number
      requested_downloads: RequestedDownload[]
      requested_formats: RequestedFormat2[]
      format: string
      format_id: string
      ext: string
      protocol: string
      language?: string
      format_note: string
      filesize_approx: number
      tbr: number
      width: number
      height: number
      resolution: string
      fps: number
      dynamic_range: string
      vcodec: string
      vbr: number
      stretched_ratio: any
      aspect_ratio: number
      acodec: string
      abr: number
      asr: number
      audio_channels: number
      release_date?: string
      license?: string
    }

    export interface Format {
      format_id: string
      format_note?: string
      ext: string
      protocol: string
      acodec?: string
      vcodec: string
      url: string
      width?: number
      height?: number
      fps?: number
      rows?: number
      columns?: number
      fragments?: Fragment[]
      resolution: string
      aspect_ratio?: number
      filesize_approx?: number
      http_headers: HttpHeaders
      audio_ext: string
      video_ext: string
      vbr?: number
      abr?: number
      tbr?: number
      format: string
      format_index: any
      manifest_url?: string
      language?: string
      preference: any
      quality?: number
      has_drm?: boolean
      source_preference?: number
      __needs_testing?: boolean
      asr?: number
      filesize?: number
      audio_channels?: number
      language_preference?: number
      dynamic_range?: string
      container?: string
      downloader_options?: DownloaderOptions
    }

    export interface Fragment {
      url: string
      duration: number
    }

    export interface HttpHeaders {
      'User-Agent': string
      Accept: string
      'Accept-Language': string
      'Sec-Fetch-Mode': string
    }

    export interface DownloaderOptions {
      http_chunk_size: number
    }

    export interface Thumbnail2 {
      url: string
      preference: number
      id: string
      height?: number
      width?: number
      resolution?: string
    }

    export interface AutomaticCaptions {
      af?: Af[]
      ak?: Ak[]
      sq?: Sq[]
      am?: Am[]
      ar?: Ar[]
      hy?: Hy[]
      as?: A[]
      ay?: Ay[]
      az?: Az[]
      bn?: Bn[]
      eu?: Eu[]
      be?: Be[]
      bho?: Bho[]
      bs?: B[]
      bg?: Bg[]
      my?: My[]
      ca?: Ca[]
      ceb?: Ceb[]
      'zh-Hans'?: Han[]
      'zh-Hant'?: ZhHant[]
      co?: Co[]
      hr?: Hr[]
      cs?: C[]
      da?: Da[]
      dv?: Dv[]
      nl?: Nl[]
      en?: En[]
      eo?: Eo[]
      et?: Et[]
      ee?: Ee[]
      fil?: Fil[]
      fi?: Fi[]
      fr?: Fr[]
      gl?: Gl[]
      lg?: Lg[]
      ka?: Ka[]
      de?: De[]
      el?: El[]
      gn?: Gn[]
      gu?: Gu[]
      ht?: Ht[]
      ha?: Ha[]
      haw?: Haw[]
      iw?: Iw[]
      hi?: Hi[]
      hmn?: Hmn[]
      hu?: Hu[]
      is?: I[]
      ig?: Ig[]
      id?: Id[]
      ga?: Ga[]
      it?: It[]
      ja?: Ja[]
      jv?: Jv[]
      kn?: Kn[]
      kk?: Kk[]
      km?: Km[]
      rw?: Rw[]
      ko?: Ko[]
      kri?: Kri[]
      ku?: Ku[]
      ky?: Ky[]
      lo?: Lo[]
      la?: La[]
      lv?: Lv[]
      ln?: Ln[]
      lt?: Lt[]
      lb?: Lb[]
      mk?: Mk[]
      mg?: Mg[]
      ms?: M[]
      ml?: Ml[]
      mt?: Mt[]
      mi?: Mi[]
      mr?: Mr[]
      mn?: Mn[]
      ne?: Ne[]
      nso?: Nso[]
      no?: No[]
      ny?: Ny[]
      or?: Or[]
      om?: Om[]
      ps?: P[]
      fa?: Fa[]
      pl?: Pl[]
      pt?: Pt[]
      pa?: Pa[]
      qu?: Qu[]
      ro?: Ro[]
      ru?: Ru[]
      sm?: Sm[]
      sa?: Sa[]
      gd?: Gd[]
      sr?: Sr[]
      sn?: Sn[]
      sd?: Sd[]
      si?: Si[]
      sk?: Sk[]
      sl?: Sl[]
      so?: So[]
      st?: St[]
      es?: E[]
      su?: Su[]
      sw?: Sw[]
      sv?: Sv[]
      tg?: Tg[]
      ta?: Um[]
      tt?: Tt[]
      te?: Te[]
      th?: Th[]
      ti?: Ti[]
      ts?: T[]
      tr?: Tr[]
      tk?: Tk[]
      'uk-orig'?: UkOrig[]
      uk?: Uk[]
      ur?: Ur[]
      ug?: Ug[]
      uz?: Uz[]
      vi?: Vi[]
      cy?: Cy[]
      fy?: Fy[]
      xh?: Xh[]
      yi?: Yi[]
      yo?: Yo[]
      zu?: Zu[]
      'ko-orig'?: KoOrig[]
      'it-orig'?: ItOrig[]
    }

    export interface Af {
      ext: string
      url: string
      name: string
    }

    export interface Ak {
      ext: string
      url: string
      name: string
    }

    export interface Sq {
      ext: string
      url: string
      name: string
    }

    export interface Am {
      ext: string
      url: string
      name: string
    }

    export interface Ar {
      ext: string
      url: string
      name: string
    }

    export interface Hy {
      ext: string
      url: string
      name: string
    }

    export interface A {
      ext: string
      url: string
      name: string
    }

    export interface Ay {
      ext: string
      url: string
      name: string
    }

    export interface Az {
      ext: string
      url: string
      name: string
    }

    export interface Bn {
      ext: string
      url: string
      name: string
    }

    export interface Eu {
      ext: string
      url: string
      name: string
    }

    export interface Be {
      ext: string
      url: string
      name: string
    }

    export interface Bho {
      ext: string
      url: string
      name: string
    }

    export interface B {
      ext: string
      url: string
      name: string
    }

    export interface Bg {
      ext: string
      url: string
      name: string
    }

    export interface My {
      ext: string
      url: string
      name: string
    }

    export interface Ca {
      ext: string
      url: string
      name: string
    }

    export interface Ceb {
      ext: string
      url: string
      name: string
    }

    export interface Han {
      ext: string
      url: string
      name: string
    }

    export interface ZhHant {
      ext: string
      url: string
      name: string
    }

    export interface Co {
      ext: string
      url: string
      name: string
    }

    export interface Hr {
      ext: string
      url: string
      name: string
    }

    export interface C {
      ext: string
      url: string
      name: string
    }

    export interface Da {
      ext: string
      url: string
      name: string
    }

    export interface Dv {
      ext: string
      url: string
      name: string
    }

    export interface Nl {
      ext: string
      url: string
      name: string
    }

    export interface En {
      ext: string
      url: string
      name: string
    }

    export interface Eo {
      ext: string
      url: string
      name: string
    }

    export interface Et {
      ext: string
      url: string
      name: string
    }

    export interface Ee {
      ext: string
      url: string
      name: string
    }

    export interface Fil {
      ext: string
      url: string
      name: string
    }

    export interface Fi {
      ext: string
      url: string
      name: string
    }

    export interface Fr {
      ext: string
      url: string
      name: string
    }

    export interface Gl {
      ext: string
      url: string
      name: string
    }

    export interface Lg {
      ext: string
      url: string
      name: string
    }

    export interface Ka {
      ext: string
      url: string
      name: string
    }

    export interface De {
      ext: string
      url: string
      name: string
    }

    export interface El {
      ext: string
      url: string
      name: string
    }

    export interface Gn {
      ext: string
      url: string
      name: string
    }

    export interface Gu {
      ext: string
      url: string
      name: string
    }

    export interface Ht {
      ext: string
      url: string
      name: string
    }

    export interface Ha {
      ext: string
      url: string
      name: string
    }

    export interface Haw {
      ext: string
      url: string
      name: string
    }

    export interface Iw {
      ext: string
      url: string
      name: string
    }

    export interface Hi {
      ext: string
      url: string
      name: string
    }

    export interface Hmn {
      ext: string
      url: string
      name: string
    }

    export interface Hu {
      ext: string
      url: string
      name: string
    }

    export interface I {
      ext: string
      url: string
      name: string
    }

    export interface Ig {
      ext: string
      url: string
      name: string
    }

    export interface Id {
      ext: string
      url: string
      name: string
    }

    export interface Ga {
      ext: string
      url: string
      name: string
    }

    export interface It {
      ext: string
      url: string
      name: string
    }

    export interface Ja {
      ext: string
      url: string
      name: string
    }

    export interface Jv {
      ext: string
      url: string
      name: string
    }

    export interface Kn {
      ext: string
      url: string
      name: string
    }

    export interface Kk {
      ext: string
      url: string
      name: string
    }

    export interface Km {
      ext: string
      url: string
      name: string
    }

    export interface Rw {
      ext: string
      url: string
      name: string
    }

    export interface Ko {
      ext: string
      url: string
      name: string
    }

    export interface Kri {
      ext: string
      url: string
      name: string
    }

    export interface Ku {
      ext: string
      url: string
      name: string
    }

    export interface Ky {
      ext: string
      url: string
      name: string
    }

    export interface Lo {
      ext: string
      url: string
      name: string
    }

    export interface La {
      ext: string
      url: string
      name: string
    }

    export interface Lv {
      ext: string
      url: string
      name: string
    }

    export interface Ln {
      ext: string
      url: string
      name: string
    }

    export interface Lt {
      ext: string
      url: string
      name: string
    }

    export interface Lb {
      ext: string
      url: string
      name: string
    }

    export interface Mk {
      ext: string
      url: string
      name: string
    }

    export interface Mg {
      ext: string
      url: string
      name: string
    }

    export interface M {
      ext: string
      url: string
      name: string
    }

    export interface Ml {
      ext: string
      url: string
      name: string
    }

    export interface Mt {
      ext: string
      url: string
      name: string
    }

    export interface Mi {
      ext: string
      url: string
      name: string
    }

    export interface Mr {
      ext: string
      url: string
      name: string
    }

    export interface Mn {
      ext: string
      url: string
      name: string
    }

    export interface Ne {
      ext: string
      url: string
      name: string
    }

    export interface Nso {
      ext: string
      url: string
      name: string
    }

    export interface No {
      ext: string
      url: string
      name: string
    }

    export interface Ny {
      ext: string
      url: string
      name: string
    }

    export interface Or {
      ext: string
      url: string
      name: string
    }

    export interface Om {
      ext: string
      url: string
      name: string
    }

    export interface P {
      ext: string
      url: string
      name: string
    }

    export interface Fa {
      ext: string
      url: string
      name: string
    }

    export interface Pl {
      ext: string
      url: string
      name: string
    }

    export interface Pt {
      ext: string
      url: string
      name: string
    }

    export interface Pa {
      ext: string
      url: string
      name: string
    }

    export interface Qu {
      ext: string
      url: string
      name: string
    }

    export interface Ro {
      ext: string
      url: string
      name: string
    }

    export interface Ru {
      ext: string
      url: string
      name: string
    }

    export interface Sm {
      ext: string
      url: string
      name: string
    }

    export interface Sa {
      ext: string
      url: string
      name: string
    }

    export interface Gd {
      ext: string
      url: string
      name: string
    }

    export interface Sr {
      ext: string
      url: string
      name: string
    }

    export interface Sn {
      ext: string
      url: string
      name: string
    }

    export interface Sd {
      ext: string
      url: string
      name: string
    }

    export interface Si {
      ext: string
      url: string
      name: string
    }

    export interface Sk {
      ext: string
      url: string
      name: string
    }

    export interface Sl {
      ext: string
      url: string
      name: string
    }

    export interface So {
      ext: string
      url: string
      name: string
    }

    export interface St {
      ext: string
      url: string
      name: string
    }

    export interface E {
      ext: string
      url: string
      name: string
    }

    export interface Su {
      ext: string
      url: string
      name: string
    }

    export interface Sw {
      ext: string
      url: string
      name: string
    }

    export interface Sv {
      ext: string
      url: string
      name: string
    }

    export interface Tg {
      ext: string
      url: string
      name: string
    }

    export interface Um {
      ext: string
      url: string
      name: string
    }

    export interface Tt {
      ext: string
      url: string
      name: string
    }

    export interface Te {
      ext: string
      url: string
      name: string
    }

    export interface Th {
      ext: string
      url: string
      name: string
    }

    export interface Ti {
      ext: string
      url: string
      name: string
    }

    export interface T {
      ext: string
      url: string
      name: string
    }

    export interface Tr {
      ext: string
      url: string
      name: string
    }

    export interface Tk {
      ext: string
      url: string
      name: string
    }

    export interface UkOrig {
      ext: string
      url: string
      name: string
    }

    export interface Uk {
      ext: string
      url: string
      name: string
    }

    export interface Ur {
      ext: string
      url: string
      name: string
    }

    export interface Ug {
      ext: string
      url: string
      name: string
    }

    export interface Uz {
      ext: string
      url: string
      name: string
    }

    export interface Vi {
      ext: string
      url: string
      name: string
    }

    export interface Cy {
      ext: string
      url: string
      name: string
    }

    export interface Fy {
      ext: string
      url: string
      name: string
    }

    export interface Xh {
      ext: string
      url: string
      name: string
    }

    export interface Yi {
      ext: string
      url: string
      name: string
    }

    export interface Yo {
      ext: string
      url: string
      name: string
    }

    export interface Zu {
      ext: string
      url: string
      name: string
    }

    export interface KoOrig {
      ext: string
      url: string
      name: string
    }

    export interface ItOrig {
      ext: string
      url: string
      name: string
    }

    export interface Subtitles {
      live_chat?: LiveChat[]
    }

    export interface LiveChat {
      url: string
      video_id: string
      ext: string
      protocol: string
    }

    export interface Heatmap {
      start_time: number
      end_time: number
      value: number
    }

    export interface RequestedDownload {
      requested_formats: RequestedFormat[]
      format: string
      format_id: string
      ext: string
      protocol: string
      format_note: string
      filesize_approx: number
      tbr: number
      width: number
      height: number
      resolution: string
      fps: number
      dynamic_range: string
      vcodec: string
      vbr: number
      aspect_ratio: number
      acodec: string
      abr: number
      asr: number
      audio_channels: number
      _filename: string
      filename: string
      __write_download_archive: boolean
      language?: string
    }

    export interface RequestedFormat {
      asr?: number
      filesize: number
      format_id: string
      format_note: string
      source_preference: number
      fps?: number
      audio_channels?: number
      height?: number
      quality: number
      has_drm: boolean
      tbr: number
      filesize_approx: number
      url: string
      width?: number
      language?: string
      language_preference: number
      preference: any
      ext: string
      vcodec: string
      acodec: string
      dynamic_range?: string
      container: string
      downloader_options: DownloaderOptions2
      protocol: string
      resolution: string
      aspect_ratio?: number
      http_headers: HttpHeaders2
      video_ext: string
      audio_ext: string
      abr: number
      vbr: number
      format: string
    }

    export interface DownloaderOptions2 {
      http_chunk_size: number
    }

    export interface HttpHeaders2 {
      'User-Agent': string
      Accept: string
      'Accept-Language': string
      'Sec-Fetch-Mode': string
    }

    export interface RequestedFormat2 {
      asr?: number
      filesize: number
      format_id: string
      format_note: string
      source_preference: number
      fps?: number
      audio_channels?: number
      height?: number
      quality: number
      has_drm: boolean
      tbr: number
      filesize_approx: number
      url: string
      width?: number
      language?: string
      language_preference: number
      preference: any
      ext: string
      vcodec: string
      acodec: string
      dynamic_range?: string
      container: string
      downloader_options: DownloaderOptions3
      protocol: string
      resolution: string
      aspect_ratio?: number
      http_headers: HttpHeaders3
      video_ext: string
      audio_ext: string
      abr: number
      vbr: number
      format: string
    }

    export interface DownloaderOptions3 {
      http_chunk_size: number
    }

    export interface HttpHeaders3 {
      'User-Agent': string
      Accept: string
      'Accept-Language': string
      'Sec-Fetch-Mode': string
    }

    export interface FilesToMove {}

    export interface Version {
      version: string
      current_git_head: any
      release_git_head: string
      repository: string
    }
  }
}

export {}
