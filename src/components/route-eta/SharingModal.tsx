import { useCallback, useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  Snackbar,
  SxProps,
  Theme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import domtoimage from "dom-to-image";
import mergeImages from "merge-images";
import { toProperCase, triggerShare, triggerShareImg } from "../../utils";
import AppContext from "../../AppContext";
import { CircularProgress } from "../Progress";
import { useParams } from "react-router-dom";
import useLanguage from "../../hooks/useTranslation";
import { SharingEntry } from "../../@types/types";

export interface SharingModalProps extends SharingEntry {}

interface SharingModalState {
  isOpen: boolean;
  isCopied: boolean;
}

const SharingModal = ({
  routeId,
  seq = -1,
  stopId,
  event,
}: SharingModalProps) => {
  const [{ isOpen, isCopied }, setState] =
    useState<SharingModalState>(DEFAULT_STATE);
  const {
    AppTitle,
    colorMode,
    db: { routeList, stopList },
  } = useContext(AppContext);
  const { t } = useTranslation();
  const language = useLanguage();
  const [imgBase64, setImgBase64] = useState<string>("");
  const { id: routeUri } = useParams();
  const { route, dest } = routeList[routeId];
  const stop = stopList[stopId];

  const setIsOpen = useCallback(
    (isOpen: boolean) => setState((p) => ({ ...p, isOpen })),
    []
  );
  const setIsCopied = useCallback(
    (isCopied: boolean) => setState((p) => ({ ...p, isCopied })),
    []
  );

  useEffect(() => {
    if (isOpen) {
      Promise.all([
        domToImage("route-eta-header", colorMode),
        domToImage("route-map", colorMode),
        domToImage(`stop-${seq}`, colorMode),
      ])
        .then((rawBase64s) => {
          let baseH = 0;
          return mergeImages(
            rawBase64s
              .filter(([v]) => v)
              .map(([rawBase64, h]) => {
                baseH += h as number;
                return {
                  src: rawBase64,
                  x: 0,
                  y: baseH - h,
                };
              }),
            {
              height: baseH,
            }
          );
        })
        .then((b64) => {
          setImgBase64(b64);
        });
    }
    return () => {
      setImgBase64("");
    };
  }, [isOpen, colorMode, seq]);

  useEffect(() => {
    if (event) setIsOpen(true);
  }, [setIsOpen, event]);

  const handleShareLink = useCallback(() => {
    triggerShare(
      `https://${window.location.hostname}/${language}/route/${routeUri}/${stopId}%2C${seq}`,
      `${seq + 1}. ${toProperCase(stop.name[language])} - ${route} ${t(
        "往"
      )} ${toProperCase(dest[language])} - ${t(AppTitle)}`
    )
      .then(() => {
        if (navigator.clipboard) setIsCopied(true);
      })
      .finally(() => {
        setIsOpen(false);
      });
  }, [
    AppTitle,
    routeUri,
    dest,
    t,
    setIsCopied,
    language,
    seq,
    stop.name,
    stopId,
    route,
    setIsOpen,
  ]);

  const handleShareImg = useCallback(() => {
    triggerShareImg(
      imgBase64,
      `https://${window.location.hostname}/${language}/route/${routeUri}/${stopId}%2C${seq}`,
      `${seq + 1}. ${toProperCase(stop.name[language])} - ${route} ${t(
        "往"
      )} ${toProperCase(dest[language])} - https://hkbus.app/`
    )
      .then(() => {
        if (navigator.clipboard) setIsCopied(true);
      })
      .finally(() => {
        setIsOpen(false);
      });
  }, [
    dest,
    setIsCopied,
    setIsOpen,
    stop.name,
    stopId,
    t,
    imgBase64,
    language,
    routeUri,
    seq,
    route,
  ]);

  return (
    <>
      <Modal sx={rootSx} onClose={() => setIsOpen(false)} open={isOpen}>
        <Container maxWidth="xs" sx={containerSx} fixed>
          <Box sx={boxContainerSx}>
            <Box sx={imgContainerSx}>
              {imgBase64 ? (
                <img
                  src={imgBase64}
                  style={{ objectFit: "contain", width: 396, height: 400 }}
                  alt=""
                />
              ) : (
                <CircularProgress color="inherit" />
              )}
            </Box>
            <Box sx={buttonContainerSx}>
              <Button sx={buttonSx} onClick={handleShareLink}>
                {t("以鏈結分享")}
              </Button>
              <Button
                sx={buttonSx}
                onClick={handleShareImg}
                disabled={imgBase64 === ""}
              >
                {t("以圖片分享")}
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isCopied}
        autoHideDuration={1500}
        onClose={() => {
          setIsCopied(false);
        }}
        message={t("已複製到剪貼簿")}
      />
    </>
  );
};

const domToImage = (
  domId: string,
  colorMode: "dark" | "light"
): Promise<[string, number, number]> => {
  const el = document.getElementById(domId);
  if (el) {
    return domtoimage
      .toPng(el, {
        bgcolor: colorMode === "light" ? "#fedb00" : "#000",
      })
      .then((base64) => [base64, el.clientHeight, el.clientWidth]);
  } else {
    return Promise.resolve(["", 0, 0]);
  }
};

export default SharingModal;

const DEFAULT_STATE: SharingModalState = {
  isOpen: false,
  isCopied: false,
};

const rootSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const containerSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  outline: "none",
};

const boxContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  background: (theme) => theme.palette.background.default,
};

const imgContainerSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 400,
  width: "100%",
};

const buttonContainerSx: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  backgroundColor: (theme) => theme.palette.background.default,
};

const buttonSx: SxProps<Theme> = {
  flex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
};
